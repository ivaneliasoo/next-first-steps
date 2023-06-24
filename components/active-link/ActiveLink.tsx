'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import style from './ActiveLink.module.css';
export interface ActiveLInkProps {
  path: string;
  label: string;
}

export const ActiveLink = ({ path, label }: ActiveLInkProps) => {

  const pathName = usePathname();

  return (
   <Link className={`${style.link} ${ pathName === path && style['active-link']}`} href={path}>{label}</Link>
  )
}