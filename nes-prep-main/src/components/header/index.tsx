import { FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import style from './style.css';

const Header: FunctionalComponent = () => {
    return (
        <header class={style.header}>
            <h1>This is NES!</h1>
            <nav>
                <Link activeClassName={style.active} href="/">
                    Home
                </Link>
                <Link activeClassName={style.active} href="/profile">
                    NOSE
                </Link>
                <Link activeClassName={style.active} href="/profile/john">
                    NAS
                </Link>
            </nav>
        </header>
    );
};

export default Header;
