"use client";

export interface CartItem {
  slug: string;
  name: string;
}

const CART_KEY = 'mcgrow.sampleCart';

export function getCart(): CartItem[] {
  if (typeof window === 'undefined') return [];

  try {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  } catch {
    return [];
  }
}

export function addToCart(item: CartItem): void {
  const cart = getCart();
  const exists = cart.find(i => i.slug === item.slug);

  if (!exists) {
    cart.push(item);
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    window.dispatchEvent(new Event('cart-updated'));
  }
}

export function removeFromCart(slug: string): void {
  const cart = getCart();
  const filtered = cart.filter(i => i.slug !== slug);
  localStorage.setItem(CART_KEY, JSON.stringify(filtered));
  window.dispatchEvent(new Event('cart-updated'));
}

export function clearCart(): void {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new Event('cart-updated'));
}

export function getCartCount(): number {
  return getCart().length;
}
