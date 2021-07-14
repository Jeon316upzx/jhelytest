import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="navbar">
            <h4>JHELY</h4>

            <div className="menu-center">
                <div className="menu-item"> Sales </div>
                <div className="menu-item"> Rental </div>
                <div className="menu-item"> Agents </div>
                <div className="menu-item"> Course </div>
                <div className="menu-item"> Blog </div>
                <div className="menu-item"> Contact </div>
                <div className="menu-item"> Architecture </div>
            </div>

            <div className="menu-right">
                <div className="menu-item login"> <Link href="/auth/login"> Login </Link></div>
                <div className="menu-item add-house"> Add House </div>
            </div>
        </div>
    )
}
