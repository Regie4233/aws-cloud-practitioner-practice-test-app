import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { QUESTION, UserQuestionInput } from './types';
import { useDispatch } from "react-redux";

// slices
import { changeAnswer } from "@/lib/state/questions/questionSlice";


// 
export async function useFetchQuestionsData() {

    const s3Client = new S3Client({
        region: 'us-east-2',
        credentials: {
            accessKeyId: process.env.ACCESSKEY!,
            secretAccessKey: process.env.SECRET_ACCESSKEY!
        }
    });
    const params = {
        Bucket: process.env.BUCKET_NAME,
        Key: process.env.BUCKET_KEY
    };

    const command = new GetObjectCommand(params);
    const res = await s3Client.send(command);
    const data = await res.Body?.transformToString();
    const jsonContent = JSON.parse(data!);
    const questionList: QUESTION[] = [...jsonContent.questions]

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

