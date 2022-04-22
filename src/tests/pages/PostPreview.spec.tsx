import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { useSession } from 'next-auth/react';
import Post, { getStaticProps } from '../../pages/posts/preview/[slug]';
import { getPrismicCLient } from '../../services/prismic';
import { useRouter } from "next/router";

const post = {
  slug: 'my-new-post',
  title: 'My New Post',
  content: '<p>Post excerpt</p>',
  updatedAt: '10 de Abril',
};

jest.mock('next-auth/react');
jest.mock('../../services/prismic');
jest.mock('next/router');

describe('Post preview page', () => {
  it('renders correctly', () => {
    const useSessionMoked = mocked(useSession);

    useSessionMoked.mockReturnValueOnce([null, false] as any)

    render( <Post  post={post} /> );

    expect(screen.getByText('My New Post')).toBeInTheDocument();
    expect(screen.getByText('Post excerpt')).toBeInTheDocument();
    expect(screen.getByText('Wanna continue reading?')).toBeInTheDocument();
  });

  it('redirects user to full post when is user subscibed', async () => {
    const useSessionMoked = mocked(useSession);
    const useRouterMocked = mocked(useRouter);
    const pushMock = jest.fn();

    useSessionMoked.mockReturnValueOnce({
      data: {
        activeSubscription: 'fake-active-subscription',
      }
    } as any);

    useRouterMocked.mockReturnValueOnce({
      push: pushMock,
    } as any);

    render( <Post  post={post} /> );

    expect(pushMock).toHaveBeenCalledWith('/posts/my-new-post');

  });

  it('load initial data', async () => {
    const getPrismicCLientMocked = mocked(getPrismicCLient);

    getPrismicCLientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [
            { type: 'heading', text: 'My new post' }
          ],
          content: [
            { type: 'paragraph', text: 'Post content'}
          ],
        },
        last_publication_date: '04-01-2021',
      })
    } as any);

    const response = await getStaticProps({ params: { slug: 'my-new-post' } });

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: 'my-new-post',
            title: 'My new post',
            content: '<p>Post content</p>',
            updatedAt: '01 de abril de 2021',
          }
        }
      })
    );
  });
});
