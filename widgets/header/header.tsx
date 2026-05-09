"use client"

import Link from "next/link"
import styles from "./header.module.css"
import {useRouter} from "next/navigation";

export const Header = () => {
    const router= useRouter()
    //import {useRouter} from "next/navigation" - именно отсюда импорт

    //router.push() - перебрасывает на новый адрес, можно вернуться назад
    //router.replace() - перезаписывает старый адрес на нойвый, нельзя вернуться назад
    return (
        ////навигация с помощью кнопок
        <nav className={styles.navigation}>
            <ul>
                <li>
                    <button onClick={()=>router.back()} className={styles.link}>
                        Back
                    </button>
                </li>

                <li>
                    <button onClick={()=>router.push("/")} className={styles.link}>
                        Main
                    </button>
                </li>
                <li>
                    <button onClick={()=>router.push("/profile")} className={styles.link}>
                        Profile
                    </button>
                </li>
                <li>
                    <button onClick={()=>router.push("/profile/123")} className={styles.link}>
                        Profile 123
                    </button>
                </li>
                <li>
                    <button onClick={()=>router.refresh()} className={styles.link}>
                       Refresh
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