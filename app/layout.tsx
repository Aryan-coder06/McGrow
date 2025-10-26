import './globals.css';
import '@/components/LaserFlow.css';
import type { Metadata } from 'next';
import { Inter, Libre_Bodoni } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import "@/components/ElectricBorder.css";
import "@/components/InfiniteScroll.css";
import "@/components/LiquidEther.css";

// Define the two required fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const libreBodoni = Libre_Bodoni({ 
    subsets: ['latin'], 
    weight: ['400', '700'], 
    style: ['normal', 'italic'],
    variable: '--font-display', // Use the custom CSS variable defined in tailwind.config.ts
});

export const metadata: Metadata = {
  title: 'MCGROW - Premium Paint Solutions',
  description: 'Discover ultra-rich, low-VOC, washable paint solutions for interior and exterior applications.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We combine both font classes here
  return (
    <html 
      lang="en" 
      suppressHydrationWarning 
      className={`${inter.variable} ${libreBodoni.variable}`} // Apply font variables
    >
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light" // Changed from 'dark' to 'light'
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
