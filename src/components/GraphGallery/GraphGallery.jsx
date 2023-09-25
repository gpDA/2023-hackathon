import { useEffect, useState } from 'react'
import styles from './GraphGallery.module.scss';
import { FileUploader } from "react-drag-drop-files";
import * as d3 from "d3";
import { useNavigate } from "react-router-dom";
import Bar from "../Bar/Bar";
import { useSelector, useDispatch } from 'react-redux'
import { updateGraph } from '../../Slice/graphSlice'

const graphGallery = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()    

    const handleFileUpload = async (file) => {

        const reader = new FileReader();
        reader.addEventListener('load', (event) => {

            const data = event.target.result;
            const parsedData = JSON.parse(data);
            dispatch(updateGraph({key: 'bar', value: parsedData}))
        });
        reader.readAsText(file);
    }

    const redirectToGraphPanel = (graphType) => {
        if (graphType === 'bar') {
            navigate("/2023-hackathon/bar");
        }
    }

    return (
        <div className={styles['graphGallery']}>
            <div className={styles['graph-wrapper']}>
                <div onClick={() => redirectToGraphPanel('bar')} className={styles['graph']}>
                    <Bar
                        shouldDisplay={false}
                        width={200}
                        height={150}
                    />
                </div>
                <div className={styles['graph']}>
                    test 123
                </div>                
            </div>
            <div className={styles["drag-drop-wrapper"]}>
                <FileUploader handleChange={handleFileUpload} name="file" types={["JSON"]} />
            </div>
        </div>
      );
}

export default graphGallery;