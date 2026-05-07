"use client"

import Link from "next/link"
import styles from "./header.module.css"

export const Header = () => {
    return (
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <Link href="/" className={styles.link}>
                        Main
                    </Link>
                </li>
                <li>
                    <Link href="/profile" className={styles.link}>
                        Profile
                    </Link>
                </li>
                <li>
                    <Link href="/profile/123" className={styles.link}>
                        Profile 123
                    </Link>
                </li>
            </ul>
        </nav>
    )
}