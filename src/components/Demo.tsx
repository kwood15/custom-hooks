import { ReactElement } from 'react';
import { Accordion } from './Accordion';
import { Tooltip } from './Tooltip';

export default function Demo(): ReactElement {
  return (
    <div className="grid">
      <h1>Demo</h1>
      <h3>Accordion</h3>
      <Accordion
        id="accordionLink"
        title="Accordion Title"
        ariaControls="accordionPanel"
        ariaLabelledBy="accordionLink"
      >
        <p>Accordion Content Accordion Content Accordion Content</p>
      </Accordion>

      <hr />

      <h3>Tooltip</h3>
      <Tooltip position="top" content="Tooltip Top Content">
        Tooltip Top Trigger
      </Tooltip>
      <Tooltip position="right" content="Tooltip Right Content">
        Tooltip Right Trigger
      </Tooltip>
      <Tooltip position="bottom" content="Tooltip Bottom Content">
        Tooltip Bottom Trigger
      </Tooltip>
      <Tooltip position="left" content="Tooltip Left Content">
        Tooltip Left Trigger
      </Tooltip>

      <hr />
    </div>
  );
}
