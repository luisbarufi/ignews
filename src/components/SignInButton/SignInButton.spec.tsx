import { render, screen } from '@testing-library/react';
import { mocked } from 'jest-mock';
import { useSession } from 'next-auth/react';
import { SignInButton } from '.';

jest.mock('next-auth/react');

describe('SignInButton Component', () => {
  it('renders correctly when is not authenticated', () => {
    const useSessionMoked = mocked(useSession);

    useSessionMoked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated"
    });

    render( <SignInButton /> );
  
    expect(screen.getByText('Sing in whith GitHub')).toBeInTheDocument();
  });

  it('renders correctly when is authenticated', () => {
    const useSessionMocked = jest.mocked(useSession);

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { 
          name: "John Doe",
          email: "john.doe@example.com"
        },
        expires: "fake-expires",
      },
      status: "authenticated",
    });
    
    render( <SignInButton /> );
  
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
