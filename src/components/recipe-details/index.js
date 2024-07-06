import Link from 'next/link'
import React from 'react'

const RecipeDetailsPage = ({ getRecipeDetails }) => {
    return (
        <div  className='p-10'>
            <Link href={'/recipe-list'} className='p-2 rounded-lg bg-emerald-600 inline-block hover:bg-emerald-700 text-white font-bold'>Go to recipe list</Link>
            <div className='p-6 lg:max-w-6xl max-w-2xl mx-auto'>
                <div className='grid items-start grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='w-full top-0 sm:flex gap-2'>
                        <img
                            src={getRecipeDetails?.image}
                            alt={getRecipeDetails?.name}
                            className='w-4/5 rounded object-cover'
                        />
                    </div>
                    <div>
                        <h2 className='text-3xl font-extrabold text-gray-950'>{getRecipeDetails?.name}</h2>
                        <div className='gap-4 mt-5'>
                            <p className='text-2xl text-gray-700'>{getRecipeDetails?.mealType[0]}</p>
                        </div>
                        <div className='mt-5'>
                            <p className='text-xl text-gray-800'>{getRecipeDetails?.cuisine}</p>
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-lg font-bold text-gray-700'>Ingredients</h3>
                            <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>
                                {
                                    getRecipeDetails?.ingredients.map(item => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5'>
                            <h3 className='text-[16px] font-bold text-gray-700'>Preperation Time</h3>
                            <p>{getRecipeDetails.prepTimeMinutes}{' '}Minutes</p>
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-[16px] font-bold text-gray-700'>Cooking Time</h3>
                            <p>{getRecipeDetails.cookTimeMinutes}{' '}Minutes</p>
                        </div>
                        <div className='mt-5'>
                            <h3 className='text-[16px] font-bold text-gray-700'>Servings</h3>
                            <p>{getRecipeDetails.servings}{' '}Person</p>
                        </div>
                    </div>
                    <div>
                        <div className='mt-5'>
                            <h3 className='text-lg font-bold text-gray-700'>Instructions</h3>
                            <ul className='space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700'>
                                {
                                    getRecipeDetails?.instructions.map(item => (
                                        <li key={item}>{item}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetailsPage