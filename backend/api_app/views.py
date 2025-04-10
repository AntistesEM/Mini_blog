from django.db.models import Q
from rest_framework import generics
from rest_framework.exceptions import ValidationError

from .models import Comment, Post
from .serializers import CommentSerializer, PostSerializer


class PostListCreateView(generics.ListCreateAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        queryset = Post.objects.all().order_by("-created_at")
        search = self.request.query_params.get("search", None)

        if search:
            queryset = queryset.filter(
                Q(title__icontains=search) | Q(author__icontains=search)
            )

        return queryset


class PostDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    def perform_create(self, comment):
        post_id = self.request.data.get("post")
        try:
            post = Post.objects.get(id=post_id)
            comment.save(post=post)
        except Post.DoesNotExist:
            raise ValidationError("Поста с этим идентификатором не существует")
