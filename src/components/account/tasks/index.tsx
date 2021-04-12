import { ReactElement } from 'react';
import { API, graphqlOperation } from 'aws-amplify';

interface TaskState {}

function Task({}: TaskProps): ReactElement {
  const [state, setstate] = useState<TaskState>(initialState);

  return <div></div>;
}

export default Task;
