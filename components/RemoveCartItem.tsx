"use client";
 
import { removeCartItemAction } from '../app/actions';
 
interface RemoveCartItemProps {
    id: number;
}
 
export default function RemoveCardItem({ id }: RemoveCartItemProps) {
 
    async function handleRemove(id: number): Promise<void> {
        await removeCartItemAction(id);
    }
 
    return (
        <button onClick={() => handleRemove(id)} className='text-white px-2 py-3 bg-service-card-orange rounded-b-lg hover:bg-service-card-hover-orange transition-colors duration-300'>
            Remove
        </button>
    );
}
 