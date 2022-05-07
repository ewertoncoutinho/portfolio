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
        <div className="lang">
            <div className="container">
                <div className="mt-40 mb-80">
                    <label htmlFor="english">
                        <input
                            type="radio"
                            id="english"
                            onClick={() => {
                                router.push('/', '/', { locale: 'en-US' })
                            }}
                        />
                        <span>English</span>
                    </label>
                    <label htmlFor="portugues">
                        <input
                            type="radio"
                            id="portugues"
                            onClick={() => {
                                router.push('/pt-BR', '/pt-BR', {
                                    locale: 'pt-BR',
                                })
                            }}
                        />
                        <span>Português</span>
                    </label>
                </div>
            </div>
        </div>
    )
}
