import Link from 'next/link';
import styles from './styles.module.scss';

export function Suporte() {
    return (
        <div className={styles.donateContainer}>
            <Link href="">
                <button>
                    APOIAR
                </button>
            </Link>
        </div>
    )
}