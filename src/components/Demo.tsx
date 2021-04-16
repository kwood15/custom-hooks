import { ReactElement } from 'react';
import { Accordion } from './Accordion';
import { Tooltip } from './Tooltip';
import { TextField } from './TextField';
import { Dropdown } from './Dropdown';
import { Checkbox } from './Checkbox';
import { Button } from './Button';

export default function Demo(): ReactElement {
  return (
    <div className="demo">
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
      <div className="grid-demo grid-demo--tooltip">
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
      </div>

      <hr />

      <h3>TextField</h3>
      <div className="grid-demo grid-demo--textfield">
        <TextField
          id="textfieldId"
          name="textfieldName"
          className="textfield-class"
          label="TextField Label"
          helpText="TextField Help Text"
          placeholder="E.g"
        />
      </div>

      <hr />

      <h3>Dropdown</h3>
      <div className="grid-demo grid-demo--dropdown">
        <Dropdown id="dropdownId">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </Dropdown>
      </div>

      <hr />

      <h3>Checkbox</h3>
      <div className="grid-demo grid-demo--checkbox">
        <Checkbox id="checkboxID" label="Checkbox Label" name="checkboxName" />
      </div>

      <hr />

      <h3>Button</h3>
      <div className="grid-demo grid-demo--button">
        <Button
          text="Primary"
          onClick={() => alert('clicked')}
          color="primary"
        />
        <Button
          text="Secondary"
          onClick={() => alert('clicked')}
          color="secondary"
        />
        <Button
          text="Tertiary"
          onClick={() => alert('clicked')}
          color="tertiary"
        />
        <Button
          text="Disabled"
          onClick={() => alert('clicked')}
          disabled={true}
        />
        <Button text="Small" onClick={() => alert('clicked')} size="sm" />
        <Button text="Medium" onClick={() => alert('clicked')} size="md" />
        <Button text="Large" onClick={() => alert('clicked')} size="lg" />
        <Button text="Extra Large" onClick={() => alert('clicked')} size="xl" />
      </div>
      <Button
        text="Full Width"
        onClick={() => alert('clicked')}
        fullWidth={true}
      />
    </div>
  );
}
