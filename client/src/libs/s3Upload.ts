import { Storage } from 'aws-amplify';

interface S3Upload {
  key: string
}

export default async function s3Upload(file: File): Promise<string> {
  const filename = `${Date.now()}-${file.name}`;

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  }) as S3Upload;

  return stored.key;
}