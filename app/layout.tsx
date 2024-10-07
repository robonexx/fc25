import { Darker_Grotesque, Bebas_Neue } from 'next/font/google';
import { cn } from '@/utils/classnames';
import './globals.css';
import Menu from '@/components/menu/Menu';

// Import the fonts you want to use
const darkerGrotesque = Darker_Grotesque({
  subsets: ['latin'],
  weight: ['400', '700'],
});
const bebasNeue = Bebas_Neue({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
  title: 'Funkcamp 2025',
  description: 'The final edition of funkcamp and 20 year anniversary, 17th-20th of april 2025. For the lockers and campbellockers worldwide, workshops connecting people thru knowledge and sharing the history of the artform of locking',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          darkerGrotesque.className,
          bebasNeue.className,
          'w-full h-full'
        )}
      >
        <Menu />
        {children}
      </body>
    </html>
  );
}
