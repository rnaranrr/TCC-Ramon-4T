// importa banco de dados
import database from '../config/database.js';

// importa as models
import Chat from './Chat.js';
import Comment from './Comment.js';
import Commlike from './Commlike.js';
import Follow from './Follow.js';
import Moderator from './Moderator.js';
import Opinion from './Opinion.js';
import Post from './Post.js';
import Postlike from './Postlike.js';
import PostMedia from './PostMedia.js';
import Ptag from './Ptag.js';
import Raffle from './Raffle.js';
import Reports from './Reports.js';
import Repost from './Repost.js';
import Tag from './Tag.js';
import User from './User.js';

// relacionamentos entre tabelas do banco

// 1. User ~ Post
User.hasMany(Post, { foreignKey: 'user_id', as: 'posts' });
Post.belongsTo(User, { foreignKey: 'user_id', as: 'author' });

// 2. Post ~ PostMedia
Post.hasMany(PostMedia, { foreignKey: 'post_id', as: 'media' });
PostMedia.belongsTo(Post, { foreignKey: 'post_id' });

// 3. Post ~ Tag via ptag
Post.belongsToMany(Tag, { through: Ptag, foreignKey: 'post_id', as: 'tags' });
Tag.belongsToMany(Post, { through: Ptag, foreignKey: 'tag_id', as: 'posts' });

// 4. Post ~ Postlike ~ User
Post.hasMany(Postlike, { foreignKey: 'post_id', as: 'likes' });
Postlike.belongsTo(Post, { foreignKey: 'post_id' });

User.hasMany(Postlike, { foreignKey: 'user_id' });
Postlike.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// 5. Post ~ Comment ~ User
Post.hasMany(Comment, { foreignKey: 'post_id', as: 'comments' });
Comment.belongsTo(Post, { foreignKey: 'post_id' });

User.hasMany(Comment, { foreignKey: 'user_id' });
Comment.belongsTo(User, { foreignKey: 'user_id', as: 'author' });

// 6. Comment ~ Commlike ~ User
Comment.hasMany(Commlike, { foreignKey: 'comment_id', as: 'likes' });
Commlike.belongsTo(Comment, { foreignKey: 'comment_id' });

User.hasMany(Commlike, { foreignKey: 'user_id' });
Commlike.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// 7. Post ~ Repost ~ User
Post.hasMany(Repost, { foreignKey: 'post_id', as: 'reposts' });
Repost.belongsTo(Post, { foreignKey: 'post_id' });

User.hasMany(Repost, { foreignKey: 'user_id' });
Repost.belongsTo(User, { foreignKey: 'user_id', as: 'user' });

// 8. Follow (OBRIGATÓRIO TER 'as' - Duas chaves conectando as mesmas tabelas)
User.hasMany(Follow, { foreignKey: 'follower_id', as: 'following' });
User.hasMany(Follow, { foreignKey: 'following_id', as: 'followers' });

Follow.belongsTo(User, { foreignKey: 'follower_id', as: 'follower' });
Follow.belongsTo(User, { foreignKey: 'following_id', as: 'followed' });

// 9. Chat (OBRIGATÓRIO TER 'as' - Duas chaves conectando as mesmas tabelas)
User.hasMany(Chat, { foreignKey: 'chat_send_id', as: 'sentMessages' });
User.hasMany(Chat, { foreignKey: 'chat_receiver_id', as: 'receivedMessages' });

Chat.belongsTo(User, { foreignKey: 'chat_send_id', as: 'sender' });
Chat.belongsTo(User, { foreignKey: 'chat_receiver_id', as: 'receiver' });

// 10. User ~ Moderator
User.hasOne(Moderator, { foreignKey: 'moderator_userprofile', as: 'moderatorProfile' });
Moderator.belongsTo(User, { foreignKey: 'moderator_userprofile', as: 'user' });

// 11. Post ~ Reports ~ Opinion ~ Moderator
Post.hasMany(Reports, { foreignKey: 'post_id', as: 'reports' });
Reports.belongsTo(Post, { foreignKey: 'post_id', as: 'post' });

Reports.hasMany(Opinion, { foreignKey: 'report_id', as: 'opinions' });
Opinion.belongsTo(Reports, { foreignKey: 'report_id', as: 'report' });

Moderator.hasMany(Opinion, { foreignKey: 'user_id', as: 'opinions' });
Opinion.belongsTo(Moderator, { foreignKey: 'user_id', as: 'moderator' });

// 12. Post ~ Raffle
Raffle.hasMany(Post, { foreignKey: 'post_raffle_id', as: 'posts' });
Post.belongsTo(Raffle, { foreignKey: 'post_raffle_id', as: 'raffle' });

// Exporta o banco e todos os modelos
export {
    database,
    Chat,
    Comment,
    Commlike,
    Follow,
    Moderator,
    Opinion,
    Post,
    Postlike,
    PostMedia,
    Ptag,
    Raffle,
    Reports,
    Repost,
    Tag,
    User
};