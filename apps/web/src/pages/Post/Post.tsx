import { MButton, MTextfield } from '@jp/material-core-master';
import { Box, TextareaAutosize, Typography } from '@mui/material';
import usePost from './Post.hooks';
import { AppTextField } from '@app/lib/shared-components';

const Post = () => {
  const {
    variable: {isLoading, postDetails, postErrorDetails },
    methods: { handleInputChange, handleSubmit },
  } = usePost();
  return (
    <Box width={500}>
      <Typography fontSize={24}>Create Post</Typography>

      <form action="" onSubmit={handleSubmit}>
        <Box>
          <AppTextField
            name="title"
            label='Title'
            variant='outlined'
            sx={{ width: 100 }}
            placeholder="Write post title here"
            value={postDetails.title}
            onChange={handleInputChange}
            errmsg={postErrorDetails.title ?? ''}
          />
        </Box>
        <Box>
          <TextareaAutosize
            name="content"
            
            style={{ width: 500 }}
            minRows={20}
            value={postDetails.content}
            onChange={handleInputChange}
            placeholder='Write post content here'
          />
        </Box>

        <MButton
          label={isLoading ? 'Loading...' : 'Create Post'}
          type="submit"
          variant="contained"
          color="primary"
        />
      </form>
    </Box>
  );
};

export default Post;
