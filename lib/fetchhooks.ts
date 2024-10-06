// import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { QUESTION, UserQuestionInput } from './types';
import { useDispatch } from "react-redux";

// slices
import { changeAnswer } from "@/lib/state/questions/questionSlice";
// import { json } from 'stream/consumers';


// 
export async function useFetchQuestionsData() {
    // const s3Client = new S3Client({
    //     region: 'us-east-2',
    //     credentials: {
    //         accessKeyId: process.env.ACCESSKEY!,
    //         secretAccessKey: process.env.SECRET_ACCESSKEY!
    //     }
    // });
    // const params = {
    //     Bucket: process.env.BUCKET_NAME,
    //     Key: process.env.BUCKET_KEY
    // };

    // const command = new GetObjectCommand(params);
    // const res = await s3Client.send(command);
    // const data = await res.Body?.transformToString();
    // const jsonContent = JSON.parse(data!);
    const res = await fetch('http://localhost:3000/api/questions');
    const data = await res.json();
    const questionList: QUESTION[] = [...data.questions]
    return questionList;
}

export const useHandleChangeAnswer = () => {
    const dispatch = useDispatch();
    const updateState = ( answer :  Array<string>, data : UserQuestionInput ) => {
        const answeredData: UserQuestionInput = {
            question: data.question,
            selectedAnswer: [...answer],
            index: data.index
        }
        dispatch(changeAnswer(answeredData))
    }
    return {updateState}
}

