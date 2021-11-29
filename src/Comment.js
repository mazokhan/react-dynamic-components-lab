//your code here
import react {component} from 'react'

export default class Comment extends Component {
    render() {
        return (
            <div className= "comment">
                {this.props.commentText}
            </div>
        )
    }
}
