import { firestore } from '@/firestore';
import { Task } from '@/hooks/use-tasks';
import { getCount } from 'firebase/firestore/lite';
import {
  doc,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore/lite';

export const TABLE_TASKS = 'tasks';

const read = async (): Promise<Task[]> => {
  const ref = collection(firestore, TABLE_TASKS);
  const { docs } = await getDocs(ref);
  return docs.map((doc) => doc.data()) as Task[];
};

const create = async ({ status, title, description }: Omit<Task, 'id'>) => {
  const ref = collection(firestore, TABLE_TASKS);
  const count = (await getCount(ref)).data().count;

  await addDoc(ref, {
    id: `TM-${count + 1}`,
    status,
    title,
    description,
  } as Task);

  return read();
};

const update = async ({ id, ...task }: Task) => {
  const ref = collection(firestore, TABLE_TASKS);
  const q = query(ref, where('id', '==', id));
  const snapshot = await getDocs(q);

  const taskDoc = snapshot.docs[0];
  await updateDoc(doc(firestore, TABLE_TASKS, taskDoc.id), { ...task });

  return read();
};

const remove = async (id: Task['id']) => {
  const ref = collection(firestore, TABLE_TASKS);
  const q = query(ref, where('id', '==', id));
  const snapshot = await getDocs(q);
  await deleteDoc(snapshot.docs[0].ref);
  return read();
};

export const TaskRepository = {
  create,
  read,
  update,
  remove,
};
