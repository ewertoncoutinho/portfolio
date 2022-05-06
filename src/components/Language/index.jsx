import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Language(props) {
    const router = useRouter()

    useEffect(() => {
        const location = window.location.pathname
        if (location == '/') {
            document.getElementById('english').checked = true
        } else {
            document.getElementById('portugues').checked = true
        }
    })

    return (
        <div className="container">
            <div className="mt-40 ml-20 mb-80">
                <input
                    type="radio"
                    id="english"
                    onClick={() => {
                        router.push('/', '/', { locale: 'en' })
                    }}
                />
                <label htmlFor="english">English</label>
                <input
                    className="ml-20"
                    type="radio"
                    id="portugues"
                    onClick={() => {
                        router.push('/pt-BR', '/pt-BR', { locale: 'pt-BR' })
                    }}
                />
                <label htmlFor="portugues">Português</label>
            </div>
        </div>
    )
}
