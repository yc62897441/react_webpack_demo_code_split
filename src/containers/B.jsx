import { helper2_B } from '../helper/helper2'
import { helper3_AB } from '../helper/helper3'
import { helper4_AB } from '../helper/helper4'
import { helper5_AB } from '../helper/helper5'

function B() {
    helper2_B()
    helper3_AB()
    helper4_AB()
    helper5_AB()
    console.log('=====')

    return <div>B</div>
}

export default B
