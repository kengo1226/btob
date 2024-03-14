import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import phone from "../img/phone.svg";
import logo from "../img/logo.png";

function Header() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <>
            <header className="headerWrapper">
                <div className="headerInner">
                    <h1>
                        O-SWALD
                    </h1>
                    <div className='headerMenu'>
                        <div className={`headerNav ${active ? "show" : ""}`}>
                            <nav>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            ホーム
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            特徴
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            サービス
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            機能
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            価格
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            事例
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            会社情報
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <ul className='headerContact'>
                            <li className='headerPhone'>
                                <div className='headerCall'>0120-1234-1234</div>
                                <div className='headerOpen'>平日10:00～18:00</div>
                            </li>
                            <li className='btnCta docBtn'>
                                <Link href="/">
                                    資料請求
                                </Link>
                            </li>
                            <li className='btnCta'>
                                <Link href="/">
                                    お問い合わせ
                                </Link>
                            </li>
                            <li className='mobileBtn' onClick={handleClick}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header