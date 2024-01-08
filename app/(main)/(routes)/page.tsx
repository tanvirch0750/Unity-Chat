import { ModeToggle } from '@/components/mode-toggle';
import { UserButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <p className="text-3xl font-bold text-emerald-500">
      This is a protected route
      <UserButton afterSignOutUrl="/sign-in" />
      <ModeToggle />
    </p>
  );
}
