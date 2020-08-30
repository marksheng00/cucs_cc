<?xml version="1.0" encoding="utf-8"?>
<constraintlayout.widget.ConstraintLayout xmlns:ios="http://schemas.ios.com/apk/res/ios"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    layout_width="match_parent"
    layout_height="match_parent"
    app:layout_behavior="@string/appbar_scrolling_view_behavior">

    <fragment
        id="@+id/nav_host_fragment"
        name="androidx.navigation.fragment.NavHostFragment"
        layout_width="0dp"
        layout_height="0dp"
        app:defaultNavHost="true"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintHorizontal_bias="0.0"
        app:layout_constraintLeft_toLeftOf="parent"
        app:layout_constraintRight_toRightOf="parent"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintVertical_bias="0.0"
        app:navGraph="@navigation/nav_graph" />
</x.constraintlayout.widget.ConstraintLayout>
