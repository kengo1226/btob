import React from 'react';
import Link from "next/link";

function Footer() {
    return (
        <div>
            <div className='bottomCta'>
                <div className='bottomInner'>
                    <p className='contactText'>お問い合わせ</p>
                    <p className='contactTtl'>顧客管理から集客まで実現するOSWALD</p>
                    <div className='bottomBtn'>
                        <Link href="/">
                            資料請求はコチラ
                        </Link>
                    </div>
                    <div className='bottomPhone'>
                        <p>お電話でのお問い合わせ</p>
                        <p>0123-1234-1234<span>(平日 10:00～19:00)</span></p>
                    </div>
                </div>
            </div>
            <footer>
                <div className='footerWrapper'>
                    <div className="footerInfo">
                        <h2>LOGO</h2>
                        <div className="footerContent">
                            <p>株式会社○○○○</p>
                            <p>〒012-1234 東京都世田谷区二子玉川5丁目1-12</p>
                        </div>
                    </div>
                    <div className="footerMenu">
                        <div>
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
                            </ul>
                        </div>
                        <div>
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
                            </ul>
                        </div>
                        <div>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer