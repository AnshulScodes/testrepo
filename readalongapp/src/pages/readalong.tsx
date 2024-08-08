import bunny from "../assets/image 15.svg"
import arrow from "../assets/Vector.svg"
export function Readalong() {
    return (
        <div className="" style={{backgroundColor : '#d0ffff'}}>
            <div className="" id='back'>
                <button id='backButton' className="absolute top-4 left-4" onClick={() => console.log('go back')}>
                    <img src={arrow} alt="" className="w-14"/>
                </button>
                <p className="text-4xl absolute whitespace-nowrap top-6 left-20">Peter Rabbit</p>
            </div>
            <div id='mainSection' className="flex h-screen flex-wrap flex-row">
                <div id="pic" className="w-1/2 flex items-center justify-center">
                    <img src={bunny} alt="" className="w-2/3 "/>
                </div>
                <div id="text" className=" w-1/4 ">
                    <p className="text-4xl mt-44 text-center">The fox jumped upon the yellow house, and let out a piercing scream</p>
                    <div id="buttons" className="items-center justify-center text-center mt-5">
                        <div id="readalongButton" className="items-center justify-center text-2xl mt-4 rounded-lg text-white" style={{backgroundColor : '#7e00fc'}}>
                            <button className="mt-4 mb-4 mr-3" onClick={() => console.log('left')}>⬅️</button>
                            <button className="mt-4 mb-4" onClick={() => console.log('readalong')}>Read-a-long</button>
                            <button className="mt-4 mb-4 ml-3" onClick={() => console.log('right')}>➡️</button>
                        </div>
                        <button className="rounded-lg p-4 text-xl text-white mt-4 w-56" style={{backgroundColor: "#8c8c8c"}}>Play it first</button>
                    </div>
                </div>
                <div id="results" className="w-1/4">
                    <div id="resultsContainer" className="text-center rounded-lg border-4 border-black pt-1 pb-3 pl-3 pr-3 mt-4 mb-4 mr-4">
                        <p className="text-2xl underline">Results</p>
                        <div id="resultBoxes" className="w-full ">
                            <div id="resultBox" className="rounded-lg flex items-center justify-center" style={{backgroundColor : '#737373'}}>
                                <p className="text-white text-2xl">THE</p>
                                <p className="text-green-400">92%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

