import CabItems from '@/components/CabItems'
import React from 'react'
import ReactFlow, { Background, Controls, Handle, MiniMap, Position } from 'reactflow';
import 'reactflow/dist/style.css';
import { useSelector } from "react-redux";
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const initialNodes = [
    {
        id: '1',
        position: { x: -50, y: 0 },
        data: { label: 'A' },
        sourcePosition: Position.Top,
        targetPosition: Position.Bottom,
    },
    {
        id: '2',
        position: { x: 100, y: -100 },
        data: { label: 'B' },
        targetPosition: Position.Left,
        sourcePosition: Position.Right
    },
    {
        id: '3',
        position: { x: 350, y: -100 },
        data: { label: 'D' },
        targetPosition: Position.Left,
        sourcePosition: Position.Right
    },
    {
        id: '4',
        position: { x: 500, y: 0 },
        data: { label: 'F' },
        sourcePosition: Position.Bottom,
        targetPosition: Position.Top,
    },
    {
        id: '5',
        position: { x: 100, y: 100 },
        data: { label: 'C' },
        targetPosition: Position.Right,
        sourcePosition: Position.Left
    },
    {
        id: '6',
        position: { x: 350, y: 100 },
        data: { label: 'E' },
        targetPosition: Position.Right,
        sourcePosition: Position.Left
    },
];

const ChooseCab = () => {

    const router = useRouter();

    const { cabs, shortestPath, totalTime } = useSelector((state) => state.data);

    useEffect(() => {
        if (cabs.length <= 0) {
            router.push('/')
        }
    }, [cabs.length])

    const shortestPathString = [...shortestPath].sort().join('');

    const initialEdges = [
        {
            id: 'e1-2',
            source: '1',
            target: '2',
            type: 'straight',
            animated: shortestPathString.includes('AB') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '5 min',
        },
        {
            id: 'e2-3',
            source: '2',
            target: '3',
            type: 'straight',
            animated: shortestPathString.includes('BD') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '15 min',
        },
        {
            id: 'e3-4',
            source: '3',
            target: '4',
            type: 'straight',
            animated: shortestPathString.includes('DF') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '20 min',
        },
        {
            id: 'e4-6',
            source: '4',
            target: '6',
            type: 'straight',
            animated: shortestPathString.includes('EF') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '10 min',
        },
        {
            id: 'e5-6',
            source: '5',
            target: '6',
            type: 'straight',
            animated: shortestPathString.includes('CE') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '35 min',
        },
        {
            id: 'e5-6',
            source: '5',
            target: '1',
            type: 'straight',
            animated: shortestPathString.includes('AC') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '7 min',
        },
        {
            id: 'e2-6',
            source: '2',
            target: '6',
            type: 'straight',
            style: {
                strokeWidth: 3,
            },
            animated: shortestPathString.includes('BE') ? true : false,
            label: '20 min',
        },
        {
            id: 'e3-4',
            source: '5',
            target: '3',
            type: 'straight',
            animated: shortestPathString.includes('CD') ? true : false,
            style: {
                strokeWidth: 3,
            },
            label: '5 min',
        },
    ];

    return (
        <div className='flex items-center justify-center h-screen gap-20 max-w-7xl mx-auto pt-4'>
            <div className="w-full p-6 lg:w-1/3 flex flex-col gap-4 h-[90%] overflow-auto">
                {cabs.map((cab, i) => <CabItems key={i} data={cab} />)}
            </div>
            <div className="hidden lg:block lg:w-2/3 h-[80%]">

                <div className='flex items-center justify-center gap-4 mb-10'>
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-title">Pickup Location</div>
                            <div className="stat-value">{shortestPath[0]}</div>
                        </div>

                    </div>
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-title">Destination</div>
                            <div className="stat-value">{shortestPath[shortestPath.length - 1]}</div>
                        </div>

                    </div>
                </div>

                <div className='h-96'>
                    <ReactFlow nodes={initialNodes} edges={initialEdges}>
                        <Background />
                        <Controls />
                    </ReactFlow>
                </div>

                <div className='flex items-center justify-center gap-4 mt-10'>
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-title">Total Time Taken</div>
                            <div className="stat-value">{totalTime}min</div>
                        </div>

                    </div>
                    <div className="stats shadow">

                        <div className="stat">
                            <div className="stat-title">Shortest Path</div>
                            <div className="stat-value">{shortestPath}</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChooseCab