from django.urls import path

from .views import CommentListCreateView, PostDetailView, PostListCreateView

urlpatterns = [
    path("posts/", PostListCreateView.as_view(), name="post-list-create"),
    path("posts/<int:pk>/", PostDetailView.as_view(), name="post-detail"),
    path("comments/", CommentListCreateView.as_view(), name="comment-list-create"),
]
