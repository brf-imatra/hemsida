import { PaperClipIcon } from '@heroicons/react/24/solid';

export interface AttachmentProps {
  items: Array<AttachmentItem>;
}

export type AttachmentItem = {
  title: string;
  filename: string;
  url: string;
};

export function Attachment({ items }: AttachmentProps) {
  const listEl = items
    ? items.map((item) => (
        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
          <div className="flex w-0 flex-1 items-center">
            <PaperClipIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <span className="ml-2 w-0 flex-1 truncate">{item.title}</span>
          </div>
          <div className="ml-4 flex-shrink-0">
            <a
              href={item.url}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Ladda ner
            </a>
          </div>
        </li>
      ))
    : null;

  return (
    <div className="sm:col-span-2">
      <dt className="text-sm font-medium text-gray-500">Bilagor</dt>
      <dd className="mt-1 text-sm text-gray-900">
        <ul
          role="list"
          className="divide-y divide-gray-200 rounded-md border border-gray-200"
        >
          {listEl}
        </ul>
      </dd>
    </div>
  );
}
