import { MButton, MTextfield } from '@jp/material-core-master';
import { Box, TextareaAutosize, Typography } from '@mui/material';
import usePost from './Post.hooks';
import { AppTextField } from '@app/lib/shared-components';
import { getPostById } from '../../store/reducers/postManagement/service';

const Post = () => {
  const {
    variable: { isLoading, postDetails, postErrorDetails },
    methods: { handleInputChange, handleSubmit },
  } = usePost();

  return (
    <Box
      // width={500}
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Typography fontSize={32} sx={{ m: 2 }}>Create Post</Typography>

      <form action="" onSubmit={handleSubmit}>
        <Box sx={{ mb: 2 }}>
          <AppTextField
            name="title"
            label="Title"
            variant="outlined"
            sx={{ width: 100 }}
            placeholder="Write post title here"
            value={postDetails.title}
            onChange={handleInputChange}
            errmsg={postErrorDetails.title ?? ''}
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextareaAutosize
          
            name="content"
            style={{ width: 500 }}
            minRows={20}
            value={postDetails.content}
            onChange={handleInputChange}
            placeholder="Write post content here"
          />
        </Box>

        <Box sx={{ textAlign:"center" }}>
          <MButton
          
          label={isLoading ? 'Loading...' : 'Create Post'}
          type="submit"
          variant="contained"
          color="primary"
        />
        </Box>
      </form>

      <Box></Box>
    </Box>
  );
};

export default Post;
