import * as React from 'react';
import Resume from '../components/Resume/resumeembed';

function ResumePdf() {
    return <Resume></Resume>
  }

export default function ResumePage() {
    return (
        <div>
            <ResumePdf />
        </div>
    );
}