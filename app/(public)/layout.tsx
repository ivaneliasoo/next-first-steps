import { NavBar } from '@/components';

export default function PublicLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <><NavBar /><main>
      <h1>Hello Root Layout Public</h1>
      {children}
    </main></>
  );
}