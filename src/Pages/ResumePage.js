import * as React from 'react';
import Resume from '../components/Resume/resumeembed';

function ResumePDF() {
    return <Resume></Resume>
  }

export default function ResumePage() {
    return (
        <div>
            <ResumePDF />
        </div>
    );
}