export default function Language (){
    return (
        <div className="container">
            <div className="mt-40 ml-20 mb-80">
                <input defaultChecked type="radio" name="language" id="english" value="english"/>
                <label htmlFor="english">English</label>
                <input className="ml-20" type="radio" name="language" id="portugues" value="portugues"/>
                <label htmlFor="portugues">Português</label>
            </div>
        </div>
    )
}