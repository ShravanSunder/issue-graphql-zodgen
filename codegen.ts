import { CodegenConfig } from '@graphql-codegen/cli';
import z from 'zod'

const scalarDefinition = {
  BlockchainData: 'ethers.Bytes',
  BroadcastId: 'string',
  ChainId: 'number',
  CollectModuleData: 'ethers.Bytes',
  ContractAddress: 'string',
  // CreateHandle: any;
  // Cursor: any;
  DateTime: 'Date',
  Ens: 'string',
  EthereumAddress: 'string',
  FollowModuleData: 'ethers.Bytes',
  Handle: 'string',
  // HandleClaimIdScalar: any;
  InternalPublicationId: 'string',
  Jwt: 'string',
  LimitScalar: 'number',
  Locale: 'string',
  Markdown: 'string',
  MimeType: 'string',
  NftOwnershipId: 'string',
  Nonce: 'number',
  NotificationId: 'string',
  ProfileId: 'string',
  ProxyActionId: 'string',
  PublicationId: 'string',
  PublicationTag: 'string',
  PublicationUrl: 'string',
  ReactionId: 'string',
  ReferenceModuleData: 'ethers.Bytes',
  // Search:  'string',
  Signature: 'string',
  Sources: 'string',
  TimestampScalar: 'number',
  TxHash: 'string',
  TxId: 'string',
  UnixTimestamp: 'number',
  Url: 'string',
  Void: 'never',
} as const;

const bytesSchema = z.array(z.any());
const zodScalarDefinition = {
  blockchainData: z.array(z.any()),
  broadcastId: z.string(),
  chainId: z.number(),
  collectModuleData: bytesSchema,
  contractAddress: z.string(),
   createHandle: z.any(),
   cursor: z.any(),
  dateTime: z.date(),
  ens: z.string(),
  //EthereumAddress: z.string(),
  ethereumAddress: z.string(),
  followModuleData: bytesSchema,
  handle: z.string(),
  handleClaimIdScalar: z.any(),
  internalPublicationId: z.string(),
  jwt: z.string(),
  limitScalar: z.number(),
  locale: z.string(),
  markdown: z.string(),
  mimeType: z.string(),
  nftOwnershipId: z.string(),
  nonce: z.number(),
  notificationId: z.string(),
  profileId: z.string(),
  proxyActionId: z.string(),
  publicationId: z.string(),
  publicationTag: z.string(),
  publicationUrl: z.string(),
  reactionId: z.string(),
  referenceModuleData: bytesSchema,
  search:  z.string(),
  signature: z.string(),
  sources: z.string(),
  timestampScalar: z.number(),
  txHash: z.string(),
  txId: z.string(),
  unixTimestamp: z.number(),
  tagcriteria: 'TagSortCriteriaSchema',
  url: z.string(),
  void: z.never(),
} as const;

const pluginConfig = {
  enumsAsConst: true,
  maybeValue: 'T | undefined | null',
  nonOptionalTypename: true,
  useTypenameImports: true,
  avoidOptionals: true,
  schema: 'zod',
  // strictScalars: true,
  scalars: scalarDefinition,
  enumAsTypes: true,
  withObjectType: true,
  scalarSchemas: zodScalarDefinition,
};

const importPlugins = [
  {
    add: {
      content: '/* eslint-disable */',
    },
  },
  {
    add: {
      content: 'import { ethers } from "ethers"',
    },
  },
  {
    add: {
      content: ' ',
    },
  },
];

const config: CodegenConfig = {
  schema: 'https://api-sandbox-mumbai.lens.dev/',
  documents: ['src/graphql/**/*.{graphql,gql}'],
  config: pluginConfig,
  ignoreNoDocuments: true, // for better experience with the watcher
  hooks: {
    afterOneFileWrite: ['prettier --write'],
  },
  generates: {
    './src/generated/gql/': {
      preset: 'client',
      plugins: [...importPlugins],
      presetConfig: pluginConfig,
      // config: pluginConfig,
    },
    './src/generated/gql/query.ts': {
      preset: 'import-types',
      plugins: [
        // 'typescript',
        // 'typescript-operations',
        // 'typescript-graphql-request',
        'typescript-react-query',
        // 'typescript-validation-schema',
        ...importPlugins,
      ],
      config: pluginConfig,
      presetConfig: {
        typesPath: './graphql',
      },
    },
    './src/generated/gql/zod.ts': {
      preset: 'import-types',
      plugins: [...importPlugins, 'typescript-validation-schema'],
      config: { ...pluginConfig, importFrom: './graphql' },
      presetConfig: {
        typesPath: './graphql',
      },
    },
  },
};

export default config;
