import { helper1_A } from '../helper/helper1'
import { helper2_A } from '../helper/helper2'
import { helper3_AB } from '../helper/helper3'
import { helper4_AB } from '../helper/helper4'
import { helper5_AB } from '../helper/helper5'

function A() {
    helper1_A()
    helper2_A()
    helper3_AB()
    helper4_AB()
    helper5_AB()
    console.log('=====')

    return <div>A</div>
}

export default A
