import os
import io
import boto3
import json
import csv

# grab environment variables
ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime = boto3.client('runtime.sagemaker')


def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))

    data = json.loads(json.dumps(event))

    jsonFile = json.dumps(data)

    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,
                                       ContentType='application/json',
                                       Body=jsonFile)
    # print(response)
    # print("success?")
    result = json.loads(response['Body'].read().decode())
    print(result)
    return result[0]["translation_text"]
    # return predicted_label
