@extends('layouts.app')
@include('admin.sidebar')
@section('content')
<div class="container">
    @include('flash-message')
    <div class="row justify-content-center">
        <div class="col-md-2">
            <div class="card">
                <div class="card-header">Navigation</div>
                <div class="card-body">
                    @yield('sidebar')
                </div>
            </div>
        </div>
        <div class="col-md-10">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Agents</h4>
                    <a class="heading-elements-toggle"><i class="fa fa-ellipsis-v font-medium-3"></i></a>
                    <div class="heading-elements">
                        <ul class="list-inline mb-0">
                            <li><a data-action="collapse"><i class="ft-minus"></i></a></li>
                            <li><a data-action="reload"><i class="ft-rotate-cw"></i></a></li>
                            <li><a data-action="expand"><i class="ft-maximize"></i></a></li>
                            <li><a href="{{route('agents.create')}}" class="btn btn-primary add-btn btn-darken-3">Add Agent</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <div class="card-block card-dashboard table-responsive">
                        <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper form-inline dt-bootstrap4 no-footer">
                            <div class="dt-buttons">
                                <a class="dt-button buttons-copy buttons-html5 btn btn-primary mr-1" tabindex="0" aria-controls="DataTables_Table_0" href="#"><span>Copy</span></a>
                                <a class="dt-button buttons-csv buttons-html5 btn btn-primary mr-1" tabindex="0" aria-controls="DataTables_Table_0" href="#"><span>CSV</span></a>
                                <a class="dt-button buttons-excel buttons-html5 btn btn-primary mr-1" tabindex="0" aria-controls="DataTables_Table_0" href="#"><span>Excel</span></a>
                                <a class="dt-button buttons-pdf buttons-html5 btn btn-primary mr-1" tabindex="0" aria-controls="DataTables_Table_0" href="#"><span>PDF</span></a>
                                <a class="dt-button buttons-print btn btn-primary mr-1" tabindex="0" aria-controls="DataTables_Table_0" href="#"><span>Print</span></a>
                            </div>
                            <div id="DataTables_Table_0_filter" class="dataTables_filter"><label>Search:<input type="search" class="form-control input-sm" placeholder="" aria-controls="DataTables_Table_0"></label>
                            </div>
                            <table class="table table-striped table-bordered file-export dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">

                                <thead>
                                    <tr role="row">
                                        <th class="sorting" rowspan="1" colspan="1" style="width: 37px;">Sl.No</th>
                                        <th class="sorting" rowspan="1" colspan="1" style="width: 77px;">Name</th>
                                        <th class="sorting" tabindex="0" rowspan="1" colspan="1" style="width: 136px;">Phone</th>
                                        <th class="sorting" rowspan="1" colspan="1"  style="width: 64px;">Image</th>
                                        <th class="sorting_asc" rowspan="1" colspan="1" style="width: 254px;">Address</th>
                                        <th class="sorting" rowspan="1" colspan="1" style="width: 110px;">Mobile Phones</th>
                                        <th class="sorting" rowspan="1" colspan="1" style="width: 67px;">Rating</th>
                                        <th class="sorting" rowspan="1" colspan="1" style="width: 232px;">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse($agents as $agent)
                                    <tr role="row" class="odd">
                                        <td class="">{{$agent->id}}</td>
                                        <td>{{$agent->name}}</td>
                                        <td>
                                            {{$agent->phone}}
                                        </td>
                                        <td>
                                            No Image
                                        </td>
                                        <td class="sorting_1">{{$agent->address}}/td>
                                        <td>{{$agent->mobile_phone}}</td>
                                        <td class="star">
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i>
                                            <i class="fa fa-star-o" aria-hidden="true"></i> 
                                        </td>
                                        <td>
                                            <a href="http://127.0.0.1/hellodrive/public/admin/categories?shop=1" class="btn btn-primary btn-darken-3 btn-block">Activities</a>
                                            <a href="http://127.0.0.1/hellodrive/public/admin/products?shop=1" class="btn btn-primary btn-darken-3 btn-block">Deals</a>
                                            <a href="{{ route('agents.edit', $agent->id)}}" class="table-btn btn btn-icon btn-success btn-block">{{__('Edit')}}<i class="fa fa-pencil-square-o"></i></a>
                                            <form id="resource-delete-{{ $agent->id }}" action="{{ route('agents.destroy', $agent->id)}}" method="POST" class="divider">
                                                {{ csrf_field() }}
                                                {{ method_field('DELETE') }}
                                                <button class="table-btn btn btn-icon btn-danger btn-block" form="resource-delete-{{ $agent->id }}">{{__('Delete')}}<i class="fa fa-trash-o"></i></button>
                                            </form>

                                        </td>
                                    </tr>
                                    @empty
                                     <tr>
                                        <td>{{ __('No Agents') }}</td>
                                    </tr>
                                    @endforelse
                                </tbody>
                            </table>
                            <div class="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                {!! $agents->render() !!}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
