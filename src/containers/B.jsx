import { helperAB } from '../helper/helperAB'
import { helperABC } from '../helper/helperABC'

function B() {
    helperAB()
    helperABC()
    console.log('=====')

    return <div>B</div>
}

export default B
