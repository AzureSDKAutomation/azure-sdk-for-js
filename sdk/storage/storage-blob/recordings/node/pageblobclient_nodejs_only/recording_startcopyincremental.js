let nock = require('nock');

module.exports.testInfo = {"container":"container156711963815209856","blob":"blob156711963843702409","page":"page156711963931902163"}

nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'ETag',
  '"0x8D72CD4B55C84FF"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '601ce14c-401e-00a1-01bd-5eb40a000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/blob156711963843702409')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'ETag',
  '"0x8D72CD4B5897B30"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'cb8b7662-e01e-00e3-55bd-5e9f1e000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/blob156711963843702409', "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'u+ZALNybfiA2/JfpqRcmzQ==',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'ETag',
  '"0x8D72CD4B5B638AA"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '62200fb1-601e-0058-22bd-5e7eea000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-blob-sequence-number',
  '0',
  'Date',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/blob156711963843702409')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'ETag',
  '"0x8D72CD4B5B638AA"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '58d1b1d3-e01e-006b-5ebd-5e27c7000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-snapshot',
  '2019-08-29T23:00:39.2453664Z',
  'x-ms-request-server-encrypted',
  'false',
  'Date',
  'Thu, 29 Aug 2019 23:00:38 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856', "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?><SignedIdentifiers/>")
  .query(true)
  .reply(200, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:39 GMT',
  'ETag',
  '"0x8D72CD4B610A1D8"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e2106607-101e-00b9-59bd-5e999f000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 29 Aug 2019 23:00:39 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/page156711963931902163')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:46 GMT',
  'ETag',
  '"0x8D72CD4B9FFA705"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a910df1a-501e-0036-59bd-5ed7c3000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-copy-id',
  '077ccf99-f5c7-4b8e-a979-8092b1bbf0e5',
  'x-ms-copy-status',
  'pending',
  'Date',
  'Thu, 29 Aug 2019 23:00:45 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156711963815209856/page156711963931902163')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:46 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D72CD4BA0C5380"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'ac074f22-c01e-0055-14bd-5e91e6000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Thu, 29 Aug 2019 23:00:46 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  '077ccf99-f5c7-4b8e-a979-8092b1bbf0e5',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:39.2453664Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Thu, 29 Aug 2019 23:00:46 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-08-29T23:00:46.2343458Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 29 Aug 2019 23:00:49 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156711963815209856')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.blob.core.windows.net/\" ContainerName=\"container156711963815209856\"><Blobs><Blob><Name>blob156711963843702409</Name><Snapshot>2019-08-29T23:00:39.2453664Z</Snapshot><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:38 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:38 GMT</Last-Modified><Etag>0x8D72CD4B5B638AA</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156711963843702409</Name><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:38 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:38 GMT</Last-Modified><Etag>0x8D72CD4B5B638AA</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156711963931902163</Name><Snapshot>2019-08-29T23:00:46.2343458Z</Snapshot><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:46 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:46 GMT</Last-Modified><Etag>0x8D72CD4BA0D6522</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>077ccf99-f5c7-4b8e-a979-8092b1bbf0e5</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:39.2453664Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 29 Aug 2019 23:00:46 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-08-29T23:00:46.2343458Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156711963931902163</Name><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:46 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:46 GMT</Last-Modified><Etag>0x8D72CD4BA0C5380</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><CopyId>077ccf99-f5c7-4b8e-a979-8092b1bbf0e5</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:39.2453664Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 29 Aug 2019 23:00:46 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-08-29T23:00:46.2343458Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob></Blobs><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '7d4dc546-601e-00db-5abd-5ede47000000',
  'x-ms-version',
  '2018-11-09',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 29 Aug 2019 23:00:49 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/blob156711963843702409', "cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc")
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Content-MD5',
  'I2Pl5jQ6Lyr9HgxzPysQ9A==',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'ETag',
  '"0x8D72CD4BC5E9F01"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '0e671fd8-001e-0061-64bd-5e3e4e000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-request-server-encrypted',
  'true',
  'x-ms-blob-sequence-number',
  '0',
  'Date',
  'Thu, 29 Aug 2019 23:00:49 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/blob156711963843702409')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'ETag',
  '"0x8D72CD4BC5E9F01"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e9f211fb-a01e-004e-24bd-5ebf74000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-snapshot',
  '2019-08-29T23:00:50.4183233Z',
  'x-ms-request-server-encrypted',
  'false',
  'Date',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .put('/container156711963815209856/page156711963931902163')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'ETag',
  '"0x8D72CD4BCD7193F"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '63086498-a01e-0089-25bd-5ec3b5000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-copy-id',
  'e74e8b79-490c-4a91-9045-6c9ec660b610',
  'x-ms-copy-status',
  'pending',
  'Date',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156711963815209856/page156711963931902163')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D72CD4BCD98AB9"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '58d1cf22-e01e-006b-4abd-5e27c7000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Thu, 29 Aug 2019 23:00:46 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  'e74e8b79-490c-4a91-9045-6c9ec660b610',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:50.4183233Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-08-29T23:00:50.9366917Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 29 Aug 2019 23:00:53 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .get('/container156711963815209856')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.blob.core.windows.net/\" ContainerName=\"container156711963815209856\"><Blobs><Blob><Name>blob156711963843702409</Name><Snapshot>2019-08-29T23:00:39.2453664Z</Snapshot><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:38 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:38 GMT</Last-Modified><Etag>0x8D72CD4B5B638AA</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156711963843702409</Name><Snapshot>2019-08-29T23:00:50.4183233Z</Snapshot><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:38 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:50 GMT</Last-Modified><Etag>0x8D72CD4BC5E9F01</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>blob156711963843702409</Name><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:38 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:50 GMT</Last-Modified><Etag>0x8D72CD4BC5E9F01</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156711963931902163</Name><Snapshot>2019-08-29T23:00:46.2343458Z</Snapshot><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:46 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:46 GMT</Last-Modified><Etag>0x8D72CD4BA0D6522</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>077ccf99-f5c7-4b8e-a979-8092b1bbf0e5</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:39.2453664Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 29 Aug 2019 23:00:46 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-08-29T23:00:46.2343458Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156711963931902163</Name><Snapshot>2019-08-29T23:00:50.9366917Z</Snapshot><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:46 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:50 GMT</Last-Modified><Etag>0x8D72CD4BCDAEA85</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><CopyId>e74e8b79-490c-4a91-9045-6c9ec660b610</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:50.4183233Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 29 Aug 2019 23:00:50 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-08-29T23:00:50.9366917Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob><Blob><Name>page156711963931902163</Name><Properties><Creation-Time>Thu, 29 Aug 2019 23:00:46 GMT</Creation-Time><Last-Modified>Thu, 29 Aug 2019 23:00:50 GMT</Last-Modified><Etag>0x8D72CD4BCD98AB9</Etag><Content-Length>1024</Content-Length><Content-Type>application/octet-stream</Content-Type><Content-Encoding /><Content-Language /><Content-MD5 /><Cache-Control /><Content-Disposition /><x-ms-blob-sequence-number>0</x-ms-blob-sequence-number><BlobType>PageBlob</BlobType><AccessTier>Cool</AccessTier><AccessTierInferred>true</AccessTierInferred><LeaseStatus>unlocked</LeaseStatus><LeaseState>available</LeaseState><CopyId>e74e8b79-490c-4a91-9045-6c9ec660b610</CopyId><CopySource>https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:50.4183233Z</CopySource><CopyStatus>success</CopyStatus><CopyProgress>1024/1024</CopyProgress><CopyCompletionTime>Thu, 29 Aug 2019 23:00:50 GMT</CopyCompletionTime><IncrementalCopy>true</IncrementalCopy><CopyDestinationSnapshot>2019-08-29T23:00:50.9366917Z</CopyDestinationSnapshot><ServerEncrypted>true</ServerEncrypted><TagCount>0</TagCount></Properties></Blob></Blobs><NextMarker /></EnumerationResults>", [ 'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '3d34f6a5-201e-00d7-2fbd-5e30b6000000',
  'x-ms-version',
  '2018-11-09',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,Content-Type,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 29 Aug 2019 23:00:53 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .head('/container156711963815209856/page156711963931902163')
  .reply(200, "", [ 'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D72CD4BCD98AB9"',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '18002dea-901e-0020-36bd-5e165d000000',
  'x-ms-version',
  '2018-11-09',
  'x-ms-tag-count',
  '0',
  'x-ms-meta-sourcemeta',
  'val',
  'x-ms-creation-time',
  'Thu, 29 Aug 2019 23:00:46 GMT',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-blob-type',
  'PageBlob',
  'x-ms-blob-sequence-number',
  '0',
  'x-ms-copy-id',
  'e74e8b79-490c-4a91-9045-6c9ec660b610',
  'x-ms-copy-source',
  'https://fakestorageaccount.blob.core.windows.net/container156711963815209856/blob156711963843702409?snapshot=2019-08-29T23:00:50.4183233Z',
  'x-ms-copy-status',
  'success',
  'x-ms-copy-progress',
  '1024/1024',
  'x-ms-copy-completion-time',
  'Thu, 29 Aug 2019 23:00:50 GMT',
  'x-ms-incremental-copy',
  'true',
  'x-ms-copy-destination-snapshot',
  '2019-08-29T23:00:50.9366917Z',
  'x-ms-server-encrypted',
  'true',
  'x-ms-access-tier',
  'Cool',
  'x-ms-access-tier-inferred',
  'true',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,Server,x-ms-version,x-ms-tag-count,x-ms-meta-sourcemeta,Content-Type,Last-Modified,ETag,x-ms-creation-time,x-ms-lease-status,x-ms-lease-state,x-ms-blob-type,x-ms-blob-sequence-number,x-ms-copy-id,x-ms-copy-source,x-ms-copy-status,x-ms-copy-progress,x-ms-copy-completion-time,x-ms-incremental-copy,x-ms-copy-destination-snapshot,x-ms-server-encrypted,x-ms-access-tier,x-ms-access-tier-inferred,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 29 Aug 2019 23:00:54 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.blob.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/container156711963815209856')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '171f783e-701e-00a2-26bd-5eb70d000000',
  'x-ms-version',
  '2018-11-09',
  'Date',
  'Thu, 29 Aug 2019 23:00:54 GMT',
  'Connection',
  'close' ]);

