import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { QUESTION } from './types';
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
        Bucket: 'eggsbucket',
        Key: 'awsquestions/questions.json'
    };

    const command = new GetObjectCommand(params);
    const res = await s3Client.send(command);
    const data = await res.Body?.transformToString();
    const jsonContent = JSON.parse(data!);

    const questionnaire: Array<QUESTION> = [];

    for (let yy = 0; yy < 50; yy++) {
        for (let index = 0; index < jsonContent.questions.length; index++) {
            const randIndex = Math.floor(Math.random() * 150);
            const targetitem: QUESTION = jsonContent.questions[randIndex];
            if (!questionnaire.includes(targetitem)) {
                questionnaire.push(targetitem)
                break;
            }
        }
    }
    return questionnaire;

}