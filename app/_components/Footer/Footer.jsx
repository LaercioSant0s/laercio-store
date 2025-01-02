import React from 'react'
import styles from '@/app/_components/Footer/Footer.module.css'
import {Divider} from "@nextui-org/divider";

export default function Footer() {
  return <footer id='footer' className={styles.logo}>
    <div className="flex h-5 items-center space-x-4 text-small mt-7 mb-5">
        <div><a href="mailto:laersantos13@hotmail.com" className="font-bold text-default-800 hover:text-custom-hover transition-all duration-700 tracking-widest">E-mail</a></div>
        <Divider orientation="vertical" />
        <div><a href="https://www.linkedin.com/in/laerciosantosdev/" className="font-bold text-default-800 hover:text-custom-hover transition-all duration-700 tracking-widest">LinkedIn</a></div>
        <Divider orientation="vertical" />
        <div><a href="https://www.instagram.com/laercio.dev/" className="font-bold text-default-800 hover:text-custom-hover transition-all duration-700 tracking-widest">Instagram</a></div>
      </div>
        
        <p className='text-small mb-5 tracking-widest'>2025 © Laércio Santos</p>
    </footer>
}