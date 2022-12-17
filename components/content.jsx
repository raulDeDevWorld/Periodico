import parse from 'html-react-parser';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.core.css';

export default function View ({textEditor}) {
    return (
        <div className='ql-editor' >
                {parse(`${textEditor}`)}
        </div>
    )
}



