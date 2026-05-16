"use client"

import styles from "./header.module.css"
import {usePathname, useRouter} from "next/navigation";

export const Header = () => {
    const router= useRouter()
    const pathname = usePathname();
    //usePathname(): Этот хук из next/navigation говорит нам текущий URL (например, /git).
    const isActive = (path: string) => pathname === path;
    //isActive(path): Мы сравниваем путь кнопки с текущим URL. Если они совпадают, добавляется класс active.
    //import {useRouter} from "next/navigation" - именно отсюда импорт

    //router.push() - перебрасывает на новый адрес, можно вернуться назад
    //router.push("/profile/123", { scroll: false })
    //{ scroll: false } - Методы навигации, такие как push, принимают второй,
    // необязательный аргумент — объект с опциями,
    // который позволяет управлять поведением скролла.
    //router.replace() - перезаписывает старый адрес на нойвый, нельзя вернуться назад
    //router.forward() - перейти вперед
    //router.back() - перейти назад

    return (
        ////навигация с помощью кнопок
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <button onClick={() => router.back()} className={styles.link}>
                        Back
                    </button>
                </li>

                <li>
                    <button
                        onClick={() => router.push("/")}
                        className={`${styles.link} ${isActive("/") ? styles.active : ""}`}
                    >
                        Main
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => router.push("/git")}
                        className={`${styles.link} ${isActive("/git") ? styles.active : ""}`}
                    >
                        GIT
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => router.push("/localStorage")}
                        className={`${styles.link} ${isActive("/localStorage") ? styles.active : ""}`}
                    >
                        LocalStorage
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => router.push("/profile")}
                        className={`${styles.link} ${isActive("/profile") ? styles.active : ""}`}
                    >
                        Profile
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => router.push("/profile/123")}
                        className={`${styles.link} ${isActive("/profile/123") ? styles.active : ""}`}
                    >
                        Profile 123
                    </button>
                </li>
                <li>
                    <button onClick={() => router.forward()} className={styles.link}>
                        Forward
                    </button>
                </li>
            </ul>
        </nav>
    )
}
//навигация с помощью тега Link
//<nav className={styles.navigation}>
//             <ul>
//                 <li>
//                     <Link href="/" className={styles.link}>
//                         Main
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/profile" className={styles.link}>
//                         Profile
//                     </Link>
//                 </li>
//                 <li>
//                     <Link href="/profile/123" className={styles.link}>
//                         Profile 123
//                     </Link>
//                 </li>
//             </ul>
//         </nav>