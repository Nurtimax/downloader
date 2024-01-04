/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { FC } from "react";
import ListItem, { IListItemProps } from "./ListItem";

interface IListProps {
     array: IListItemProps[];
}

const List: FC<IListProps> = ({ array }) => {
     return (
          <div className="mt-6 border-t border-gray-100 w-full">
               <dl className="divide-y divide-gray-100 w-full">
                    <div className="px-4 w-full py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                         <dd className="mt-2 w-full min-w-full text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                              <ul
                                   role="list"
                                   className="divide-y w-full divide-gray-100 rounded-md border border-gray-200"
                              >
                                   {array.map((el) => (
                                        <ListItem {...el} />
                                   ))}
                              </ul>
                         </dd>
                    </div>
               </dl>
          </div>
     );
};

export default List;
