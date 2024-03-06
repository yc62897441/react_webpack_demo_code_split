import { helperAB } from '../helper/helperAB'
import { helperABC } from '../helper/helperABC'
import { helperAC } from '../helper/helperAC'

function A() {
    helperAB()
    helperABC()
    helperAC()
    console.log('=====')

    return <div>A</div>
}

export default A
