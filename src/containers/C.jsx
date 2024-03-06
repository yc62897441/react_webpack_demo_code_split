import { helperABC } from '../helper/helperABC'
import { helperAC } from '../helper/helperAC'

function C() {
    helperABC()
    helperAC()
    console.log('=====')

    return <div>C</div>
}

export default C
